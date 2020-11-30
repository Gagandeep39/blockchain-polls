// "SPDX-License-Identifier: UNLICENSED"
pragma solidity 0.7.0;

contract PollContract {
    // ################# Variables Definition #################
    struct Poll {
        uint256 id; // ID of poll
        string question; // Question
        string thumbnail; // Reference Image
        bytes32[] options; // Options for the poll
        uint64[] votes; // Vote for each option
    }

    struct Voter {
        address id; // Voters ID
        uint256[] votedIds; // List of Poll ID user has voted for
        mapping(uint256 => bool) votedMap; // Fetch vote status for a particular vote
    }

    Poll[] private polls;
    mapping(address => Voter) private voters;
    event PollCreated (uint256 _pollId);


    // ################# Bussiness Logic #################
    function createPoll(
        string memory _question,
        string memory _thumb,
        bytes32[] memory _options
    ) public {
        require(bytes(_question).length > 0, "Empty question");
        require(_options.length > 1, "Atleast 2 Options required");

        uint256 pollId = polls.length;

        Poll memory newPoll = Poll({
            id: pollId,
            question: _question,
            thumbnail: _thumb,
            options: _options,
            votes: new uint64[](_options.length)
        });
        polls.push(newPoll);
        emit PollCreated(pollId);
    }

    function getPoll(uint256 _pollId)
        external
        view
        returns (
            uint256,
            string memory,
            string memory,
            uint64[] memory,
            bytes32[] memory
        )
    {
        require(_pollId < polls.length && _pollId > 0, "No polls found");

        return (
            polls[_pollId].id,
            polls[_pollId].question,
            polls[_pollId].thumbnail,
            polls[_pollId].votes,
            polls[_pollId].options
        );
    }

    function vote(uint256 _pollId, uint64 _vote) external {
        require(_pollId < polls.length, "Polls doesn't exist");
        require(_vote < polls[_pollId].options.length, "Invalid Vote");
        require(
            voters[msg.sender].votedMap[_pollId] == false,
            "You already voted"
        );

        // Increment a count for a particular option
        // eg. Monday, Tus=esdat, Wednesday are options
        // 23,  99, 0 are votes foir the option
        // If _vote = 0, then votes[0] i.e vote for monday will increment by 1
        polls[_pollId].votes[_vote] += 1;
        // msg.sender -> ID of a voter
        // Adds poll id of poll to votedIds list (List containing poll ids for which user has voted)
        voters[msg.sender].votedIds.push(_pollId);
        // Setting voted for a given poll as true in voter data
        // Makes a key vlaue pair of pollId <-> boolean showing user has voted for the pole ID
        voters[msg.sender].votedMap[_pollId] = true;
    }

    function getVoter(address _id)
        external
        view
        returns (address, uint256[] memory)
    {
        return (voters[_id].id, voters[_id].votedIds);
    }

    function getTotalPolls() external view returns (uint256) {
        return polls.length;
    }
}
