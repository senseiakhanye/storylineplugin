
const postResults = () => {
    const player = GetPlayer();
    const endTime = new Date();
    const time = Math.round((endTime - startTime) / 1000);
    const reportInfo = {
        question: player.GetVar("question"),
        uidAnswers: player.GetVar("uidAnswers"),
        uidClicks: player.GetVar("uidClicks"),
        uidCorrectClicks: player.GetVar("uidCorrectClicks"),
        finished: player.GetVar("finished"),
        allCorrect: player.GetVar("allcorrect"),
        time
    }
    parent.postMessage(reportInfo, '*');
}

const startTime = new Date();