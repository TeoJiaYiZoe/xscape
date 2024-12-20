export interface Question {
  header: string,
  question: string;
  options: string[];
}

export const questions: Question[] = [
  {
    "header": "The Locked Conference Room",
    "question": "You and your diverse team of employees are having a casual meeting over kopi in the conference room when suddenly, a high-stakes cyberattack causes the office to go into lockdown. An escape room timer starts ticking down, and the pressure is on—your team needs to figure out how to unlock the first door. What do you do?",
    "options": [
      "You take charge and start looking for any visible clues immediately.",
      "You calmly assess the room, looking for patterns or anything that stands out.",
      "You talk to your teammates to hear their thoughts and decide on the next step together.",
      "You dive into the nearest desk drawer and start searching for anything that might help."
    ]
  },
  {
    "header": "The Encrypted Message",
    "question": "After searching the room for a few minutes, you discover an encrypted message on the office whiteboard. It seems like the first real clue in the escape. How do you approach decrypting it?",
    "options": [
      "You start using logical methods, such as applying basic cipher decoding techniques.",
      "You look for hints in the environment—maybe something in the office holds the key.",
      "You ask your teammates for their thoughts. Collaboration might lead to new ideas.",
      "You try multiple random patterns—sometimes luck can work wonders!"
    ]
  },
  {
    "header": "The Locked Drawer",
    "question": "The encrypted message leads you to a locked drawer. You’re almost there, but you’re missing one final number to crack the code. What do you do?",
    "options": [
      "You focus on solving the final piece of the code through deduction and logic.",
      "You try to recall any relevant information or past experiences that could help you complete the code.",
      "You gather everyone and brainstorm the missing number together.",
      "You experiment with different numbers quickly to see what works."
    ]
  },
  {
    "header": "The New Puzzle",
    "question": "Inside the drawer, you find a new puzzle waiting for you. Everyone seems busy with their tasks, but a colleague who works differently from you looks at you, waiting for your next move. How do you approach this new challenge?",
    "options": [
      "You take the lead and provide clear instructions to get things moving.",
      "You’re flexible and adjust your approach to work with their style.",
      "You ask them for their input and adapt based on their strengths.",
      "You get straight to work, trusting that you’ll figure it out as you go along."
    ]
  },
  {
    "header": "The Riddles Computer",
    "question": "A computer in the corner suddenly turns on, displaying a series of riddles. You know time is ticking, and the riddles could hold the key to getting out of here. Which type of riddle excites you the most?",
    "options": [
      "Logical puzzles that require step-by-step reasoning and calculations.",
      "Riddles that are abstract and require creative thinking to solve.",
      "Team-based riddles that allow us to combine our knowledge and ideas.",
      "Puzzles that involve trial and error—testing out different possibilities until something clicks."
    ]
  },
  {
    "header": "The Countdown",
    "question": "You’ve solved the riddles, but the hacker’s countdown is ticking down fast. Your first instinct kicks in: what’s the best move to make now?",
    "options": [
      "You focus entirely on the problem, ignoring distractions to make the most of the time.",
      "You stay calm, assess the best strategy, and work efficiently under pressure.",
      "You motivate the team to stay focused and work together to maximize your chances.",
      "You take quick action, hoping that fast decisions will give you an advantage."
    ]
  },
  {
    "header": "The Debate",
    "question": "After cracking the riddles on the computer, the team begins to debate the next move. There’s growing suspicion that the hacker has left more hidden clues in the system, possibly pointing to a vulnerability. What do you suggest the team does next?",
    "options": [
      "You suggest hacking the system—it’s the quickest way to solve the problem.",
      "You think you should carefully analyze both options and pick the one that seems safest.",
      "You propose doing both—while one group hacks the system, the others can look for physical clues.",
      "You vote for searching the office—it’s always better to have a backup plan."
    ]
  },
  {
    "header": "The Office Phone",
    "question": "Suddenly, the office phone rings, and a hacker’s message taunts your team. It’s a distraction, but could there be something hidden in the message? How do you react?",
    "options": [
      "You ignore it and stay focused on solving the next clue.",
      "You analyze the message for hidden clues—maybe the hacker is leaving us hints.",
      "You reassure the team and keep everyone calm, so you don’t get distracted by the hacker’s antics.",
      "You feel motivated by the challenge and push the team to work faster."
    ]
  },
  {
    "header": "The Locked Safe",
    "question": "Your colleague found a locked safe, but there’s no obvious key. What’s your next move?",
    "options": [
      "You start calculating combinations based on clues you’ve already found.",
      "You check the environment for hidden messages or symbols that could be a clue.",
      "You gather the team and brainstorm all possible clues you’ve seen in the room so far.",
      "You try to brute-force the safe by guessing the combination based on probability."
    ]
  },
  {
    "header": "The Final Decision",
    "question": "You’re faced with a big decision: Do you risk taking a shortcut and solve the puzzle with minimal information, or play it safe and continue searching for clues?",
    "options": [
      "You’re confident—let’s take the shortcut and solve it quickly.",
      "You prefer to play it safe—searching for more clues is a better long-term strategy.",
      "You involve everyone in the decision and let the team weigh in on the best course of action.",
      "You go for the shortcut—sometimes speed is more important than being perfect."
    ]
  },
  {
    "header": "The Final Decision",
    "question": "You finally escaped the room! Time to escape the office! The office is full of distractions (phone ringing, email alerts, people talking). How do you stay focused?",
    "options": [
      "You block out everything and focus solely on the task at hand.",
      "You remain calm and prioritize what needs to be done first.",
      "You keep everyone focused, ensuring you all work together without distractions.",
      "You try to manage the distractions quickly so you can focus without interruptions."
    ]
  },
  {
    "header": "The Hidden Document",
    "question": "You’ve found a hidden document in the office printer, but it’s encrypted. How do you react?",
    "options": [
      "You immediately start looking for any clues related to the encryption key.",
      "You try to think outside the box—could the document have a symbolic meaning or pattern?",
      "You share the document with the team and ask for help to figure out the encryption.",
      "You try a few random decryption methods to see if anything works."
    ]
  },
  {
    "header": "The Tricky Puzzle",
    "question": "The exit door is just ahead, but it’s locked with a tricky puzzle. How do you approach it?",
    "options": [
      "You take a systematic approach and break down the puzzle step-by-step.",
      "You think creatively and look for unconventional solutions.",
      "You suggest tackling the puzzle together—two heads are better than one.",
      "You test different combinations quickly, trusting your instincts to get you out."
    ]
  },
  {
    "header": "The Frustrated Teammate",
    "question": "Just then, your teammate finds a hint and a possible solution to the last puzzle. He is struggling with it and feeling frustrated. What do you do?",
    "options": [
      "You step in to offer a clear explanation and guide them through the puzzle step-by-step.",
      "You suggest they take a quick break and come back with a fresh perspective, reminding them they’re almost there.",
      "You reassure them, emphasizing that the team is almost done and everyone’s input is valuable.",
      "You team up with them and try different approaches together, pushing forward as a united group."
    ]
  },
  {
    "header": "The Last Few Minutes",
    "question": "You have just a few minutes left and are close to solving the final puzzle. What’s your mindset?",
    "options": [
      "You’re laser-focused and determined to finish this, no distractions allowed.",
      "You stay calm and trust that you’ll get it done in time.",
      "You encourage the team and make sure everyone is contributing to the final push.",
      "You feel confident and take calculated risks to finish quickly."
    ]
  }
  
  
];
