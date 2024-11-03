function fadeIn(element, duration)
{
    let opacity = 0;
    const interval = 50;
    const increment = interval / duration;

    const fadeEffect = setInterval(function ()
    {
        opacity += increment;
        if (opacity >= 1)
        {
            opacity = 1;
            clearInterval(fadeEffect);
        }
        element.style.opacity = opacity;
    }, interval);
}

const profilePic = document.getElementById("profile-img");
fadeIn(profilePic, 750);