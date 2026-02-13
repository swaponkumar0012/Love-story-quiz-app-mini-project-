document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loveForm');
    const resultContainer = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');
    const resetBtn = document.getElementById('resetBtn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Collect Data
        const maleName = document.getElementById('maleName').value.trim();
        const femaleName = document.getElementById('femaleName').value.trim();
        const reason = document.getElementById('reason').value.trim();

        if (!reason) {
            alert("Please enter a reason for your love!");
            return;
        }

        // 2. Hide Form / Show Loading? (Optional, just immediate for now)
        form.classList.add('hidden');
        resultContainer.classList.remove('hidden');

        // 3. Compare with Database
        // Note: checkCondition is defined in database.js
        const matchedCondition = checkCondition(reason);

        // 4. Update UI
        if (matchedCondition) {
            showSuccess(matchedCondition);
        } else {
            showFailure(reason);
        }
    });

    resetBtn.addEventListener('click', () => {
        // Reset form and UI
        form.reset();
        resultContainer.classList.add('hidden');
        form.classList.remove('hidden');
    });

    function showSuccess(condition) {
        resultContent.innerHTML = `
            <div class="success-emoji">❤️💖🥰</div>
            <h2 class="success-title">True Love Found!</h2>
            <p>Your reason matches Divine Condition #${condition.id}:</p>
            <div class="explanation">
                <strong>"${condition.text}"</strong>
                <br><br>
                Your love is pure and aligned with the divine principles.
            </div>
        `;
    }

    function showFailure(userReason) {
        resultContent.innerHTML = `
            <div class="success-emoji" style="animation: none; font-size: 3rem;">🤔</div>
            <h2 class="failure-title">Not Quite There Yet...</h2>
            <p>Your reason was: "<em>${userReason}</em>"</p>
            <div class="explanation">
                True love is selfless and without expectation. 
                <br><br>
                <strong>Consider these Divine Principles:</strong>
                <ul style="margin-top: 10px; padding-left: 20px;">
                    ${CONDITIONS.map(c => `<li>${c.text}</li>`).join('')}
                </ul>
            </div>
        `;
    }
});
