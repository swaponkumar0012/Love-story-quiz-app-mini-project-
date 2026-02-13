// database.js
// Stores the "Divine Conditions" for the Love Story Quiz

const CONDITIONS = [
    {
        id: 1,
        text: "Love must be selfless",
        keywords: ["selfless", "unselfish", "no self", "give", "giving"]
    },
    {
        id: 2,
        text: "There should be no desires or expectations in love",
        keywords: ["no desire", "no expectation", "without expectation", "free", "nothing in return"]
    },
    {
        id: 3,
        text: "There should be no lust or longing in love",
        keywords: ["no lust", "pure", "platonic", "soul", "spiritual"]
    },
    {
        id: 4,
        text: "One must help selflessly",
        keywords: ["help", "support", "care", "aid"]
    },
    {
        id: 5,
        text: "To find joy in another’s happiness",
        keywords: ["joy", "happiness", "smile", "happy"]
    },
    {
        id: 6,
        text: "To share in another’s suffering and to find the cause of that suffering and provide a solution",
        keywords: ["suffering", "pain", "sadness", "sorrow", "solve", "solution", "resolve"]
    }
];

// Helper to check conditions (can be used if we move logic here later)
function checkCondition(userReason) {
    const lowerReason = userReason.toLowerCase();
    
    // Check if the reason matches any condition's keywords
    // We'll return the matched condition or null
    for (const condition of CONDITIONS) {
        // 1. Direct match with condition text (exact or close)
        if (lowerReason.includes(condition.text.toLowerCase())) {
            return condition;
        }
        
        // 2. Keyword match
        for (const keyword of condition.keywords) {
            if (lowerReason.includes(keyword)) {
                return condition;
            }
        }
    }
    return null;
}
