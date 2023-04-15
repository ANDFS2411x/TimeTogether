function ShowSlider() {
    const slider = document.getElementById("slider");
    const this_button = document.getElementById("photos");

    slider.style.display = "grid";
    this_button.style.display = "none";

    document.getElementById("audio_1").pause();
    document.getElementById("audio_2").play();
}