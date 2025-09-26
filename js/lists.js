// list for the getTradersInfo apicall
let tradersList = [];

//list for all the quests from the getQuestInfos apicall
let praporQuestList = [];
let therapistQuestList = [];
let skierQuestList = [];
let mechanicQuestList = [];
let ragmanQuestList = [];
let jaegerQuestList = [];
let peacekeeperQuestList = [];
let fenceQuestList = [];
let lightkeeperQuestList = [];
let btrDriverQuestList = [];
let refQuestList = [];

//list for the renderQuests function
let questRenderList = [
	"praporQuestList",
	"therapistQuestList",
	"fenceQuestList",
	"skierQuestList",
	"peacekeeperQuestList",
	"mechanicQuestList",
	"ragmanQuestList",
	"jaegerQuestList",
	"lightkeeperQuestList",
	"btrDriverQuestList",
	"refQuestList"
];

// lists for completet quests
let praporCompleteQuestsList = [];
let therapistCompleteQuestsList = [];
let skierCompleteQuestsList = [];
let mechanicCompleteQuestsList = [];
let ragmanCompleteQuestsList = [];
let jaegerCompleteQuestsList = [];
let peacekeeperCompleteQuestsList = [];
let fenceCompleteQuestsList = [];
let lightkeeperCompleteQuestsList = [];
let btrDriverCompleteQuestsList = [];
let refCompleteQuestsList = [];

const traderCompleteQuestLists = {
	Prapor: praporCompleteQuestsList,
	Therapist: therapistCompleteQuestsList,
	Fence: fenceCompleteQuestsList,
	Skier: skierCompleteQuestsList,
	Peacekeeper: peacekeeperCompleteQuestsList,
	Mechanic: mechanicCompleteQuestsList,
	Ragman: ragmanCompleteQuestsList,
	Jaeger: jaegerCompleteQuestsList,
	Lightkeeper: lightkeeperCompleteQuestsList,
	"BTR Driver": btrDriverCompleteQuestsList
};
