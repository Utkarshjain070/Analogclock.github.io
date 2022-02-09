setInterval(() => {
    time = new Date();
    thour = time.getHours();
    tminute = time.getMinutes();
    tsecond = time.getSeconds();
    hrotate = thour * 30 + tminute / 2;
    mrotate = tminute * 6;
    srotate = tsecond * 6;

a=srotate;

hour.style.transform = `rotate(${hrotate}deg)`;
minute.style.transform = `rotate(${mrotate}deg)`;
second.style.transform = `rotate(${srotate}deg)`;

}, 1000);
