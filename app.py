from quest_scheduler import QuestScheduler
from flask import Flask, jsonify, request

app = Flask(__name__)


quests = QuestScheduler()


@app.route('/add_quest', methods=['POST'])
def add_quest():
    data = request.json
    quest_name = data.get('questName')
    difficulty_level = data.get('difficultyLevel')
    reward_points = data.get('rewardPoints')
    quests.addQuest(quest_name, difficulty_level, reward_points)
    return jsonify({"message": "Quest added", "questName": quest_name}), 200


@app.route('/get_quests', methods=['GET'])
def get_quests():
    return jsonify(quests.getQuests()), 200


if __name__ == "__main__":
    app.run(debug=True)
