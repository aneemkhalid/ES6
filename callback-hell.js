// Callback Hell
// Too many callbacks create a callback hell. 

const getUserName = (userID, callback) => {
  setTimeout(() => {
    console.log("getting username...");
    callback({ userID, userName: "OsamaQureshi147" });
  }, [1000]);
};

const getUserRepos = (callback) => {
  setTimeout(() => {
    console.log("Getting repos...");
    callback(["repo1", "repo2"]);
  }, [2000]);
};

const getCommits = (callback) => {
  setTimeout(() => {
    console.log("Getting commits...");
    callback(["commit1", "commit2", "commit3", "commit4", "commit5"]);
  }, [3000]);
};

const printDetails = (user, repos, commits) => {
  console.log(
    `The user ${user.userName} has ${repos.length} repos and ${commits.length} commits!`
  );
};

getUserName(12, (user1) => {
  getUserRepos((repos2) => {
    getCommits((commits3) => {
      printDetails(user1, repos2, commits3);
    });
  });
});