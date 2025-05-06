document.addEventListener('DOMContentLoaded', () => {
   
    const settingsButton = document.querySelector('.settings-btn');
    const settingsDropdown = document.querySelector('.settings-dropdown');

    
    settingsButton.addEventListener('click', () => {
        settingsDropdown.style.display = settingsDropdown.style.display === 'none' ? 'block' : 'none';
    });

    
    const savedFont = localStorage.getItem('fontFamily');
    const savedFontSize = localStorage.getItem('fontSize');
    const savedBackgroundColor = localStorage.getItem('backgroundColor');
    const savedTextColor = localStorage.getItem('textColor');

    if (savedFont) {
        document.body.style.fontFamily = savedFont;
        document.getElementById('font-select').value = savedFont;
    }

    if (savedFontSize) {
        document.body.style.fontSize = savedFontSize;
        document.getElementById('font-size-select').value = savedFontSize;
    }

    if (savedBackgroundColor) {
        document.body.style.backgroundColor = savedBackgroundColor;
        document.getElementById('background-color-select').value = savedBackgroundColor;
    }

    if (savedTextColor) {
        document.body.style.color = savedTextColor;
        document.getElementById('text-color-select').value = savedTextColor;
    }
    
    document.getElementById('font-select').addEventListener('change', (e) => {
        const font = e.target.value;
        document.body.style.fontFamily = font;
        localStorage.setItem('fontFamily', font);
    });

    document.getElementById('font-size-select').addEventListener('change', (e) => {
        const fontSize = e.target.value;
        document.body.style.fontSize = fontSize;
        localStorage.setItem('fontSize', fontSize);
    });

    document.getElementById('background-color-select').addEventListener('input', (e) => {
        const bgColor = e.target.value;
        document.body.style.backgroundColor = bgColor;
        localStorage.setItem('backgroundColor', bgColor);
    });

    document.getElementById('text-color-select').addEventListener('input', (e) => {
        const textColor = e.target.value;
        document.body.style.color = textColor;
        localStorage.setItem('textColor', textColor);
    });
});
