document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.getElementById('nextButton');
    const loveMessage = document.getElementById('loveMessage');
    const romanticSound = document.getElementById('romanticSound');

    const messages = [
        "haiii cantikk, kamu tau gaa, kalo kamu tuh alasan aku tersenyum setiap hari. ❤️",
        "setiap detik bersamamu adalah keajaiban. Aku mencintaimu lebih dari kata-kata yang bisa diungkapkan.",
        "percayalah, hatiku hanya untukmu. Denganmu, aku merasa lengkap dan bahagia.",
        "you're soooooooooooooooooooooooooooooooooooooooo beautifulllll.",
        "makasih yaa, udah mau sama-sama... jangan bosen-bosen yaaaa",
        "kasi tau aku kalo ada masalah, jangan di pendem sendiri, kasi tau juga apa yang kamu suka dan ga suka",
        "makasiiii udah jadi yang terindah... semoga kita sama-sama sampe seterusnyaaaaa",
        "semoga Allah memberikan kekuatan buat gadis cantikku, dan jangan berikan ia beban yang terlalu berat"
    ];

    let currentIndex = 0;

    nextButton.addEventListener('click', () => {
        if (currentIndex < messages.length) {
            loveMessage.textContent = messages[currentIndex];
            loveMessage.style.display = 'block';
            romanticSound.play();
            currentIndex++;
        } else {
            loveMessage.textContent = "lovyuuuuu now, then, and forever!❤️❤️❤️❤️❤️";
            nextButton.style.display = 'none';
        }
    });
});
