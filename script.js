document.addEventListener('DOMContentLoaded', function() {
    const emailLink = document.getElementById('email');
    const twitterLink = document.getElementById('twitter');
    const linkedinLink = document.getElementById('linkedin');
    const mediumLink = document.getElementById('medium');
    const leetcodeLink = document.getElementById('leetcode');
    const codeforcesLink = document.getElementById('codeforces');

    emailLink.addEventListener('click', function() {
        alert('You are being redirected to Email.');
    });

    twitterLink.addEventListener('click', function() {
        alert('You are being redirected to Twitter.');
    });

    linkedinLink.addEventListener('click', function() {
        alert('You are being redirected to LinkedIn.');
    });

    mediumLink.addEventListener('click', function() {
        alert('You are being redirected to Medium.');
    });

    leetcodeLink.addEventListener('click', function() {
        alert('You are being redirected to Leetcode.');
    });

    codeforcesLink.addEventListener('click', function() {
        alert('You are being redirected to Codeforces.');
    });
});
