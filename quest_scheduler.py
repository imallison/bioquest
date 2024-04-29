class QuestScheduler:
    def __init__(self):
        self.quests = []

    def addQuest(self, name, difficulty, points):
        self.quests.append({
            'name': name,
            'difficulty': difficulty,
            'points': points
        })

    def getQuests(self):
        return self.quests
