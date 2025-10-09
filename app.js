const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const googleCalendarBtn = document.getElementById("googleCalendarBtn");
// const middleImage = document.getElementById("middleImage");
const eventDetails = document.getElementById("eventDetails");
const knowMore = document.getElementById("know-more");
let isPlaying = false;

const scrollFromTop = () => {
    if (!isPlaying) {
        bgMusic.play().then(() => {
            isPlaying = true;
            musicToggle.textContent = "🔊";
        }).catch(err => console.log("Play blocked:", err));
    }

    // Scroll to event details
    eventDetails.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Play audio and scroll to event details on clicking middle image
// middleImage.addEventListener("click", scrollFromTop);
knowMore.addEventListener("click", scrollFromTop);

// 🎶 Play/pause toggle
musicToggle.addEventListener("click", () => {
    if (!isPlaying) {
        bgMusic.play();
        musicToggle.textContent = "🔊";
        isPlaying = true;
    } else {
        bgMusic.pause();
        musicToggle.textContent = "🔇";
        isPlaying = false;
    }
});

// 📅 Google Calendar redirect
googleCalendarBtn.addEventListener("click", () => {
    window.open(
        "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Govind+%26+Roshini+Engagement+Ceremony&details=Join+us+for+the+celebration!&location=https%3A%2F%2Fmaps.app.goo.gl%2FWp534dRY4csFUsbo7%3Fg_st%3Diw&dates=20251011T040000Z/20251011T080000Z",
        "_blank"
    );
});

const openMap = document.getElementById("openMap");

openMap.addEventListener("click", () => {
    // Destination link
    const destination = "Satya lakshmi Grand function hall, M2J5+JF4, Anakapalle, Andhra Pradesh 531031, India";

    // Google Maps URL with source as current location
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${encodeURIComponent(destination)}`;

    window.open(mapsUrl, "_blank");
});
