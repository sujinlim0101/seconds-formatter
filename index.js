(() => {
  function formatDuration(seconds) {
    if (seconds === 0) return 'now';
    if (seconds < 0) return;

    const year = 60 * 60 * 24 * 365;
    const day = 60 * 60 * 24;
    const hour = 60 * 60;
    const minute = 60;
    const second = 1;
    let num = 0;
    let arr = [];
    let sentence = '';

    if (seconds >= year) {
      num = Math.floor(seconds / year);
      //나머지 버리기, 정수 형태로
      if (num > 1) {
        arr.push(`${num} years`);
      } else {
        //seconds > year이므로 무조건 year이 1이상
        //띠리사 else에 걸리는 것은 num === 1
        arr.push(`${num} year`);
      }
      seconds -= num * year;
    }

    if (seconds >= day) {
      num = Math.floor(seconds / day);
      if (num > 1) {
        arr.push(`${num} days`);
      } else {
        arr.push(`${num} day`);
      }
      seconds -= num * day;
    }

    if (seconds >= hour) {
      num = Math.floor(seconds / hour);
      if (num > 1) {
        arr.push(`${num} hours`);
      } else {
        arr.push(`${num} hour`);
      }
      seconds -= num * hour;
    }
    if (seconds >= minute) {
      num = Math.floor(seconds / minute);
      if (num > 1) {
        arr.push(`${num} minutes`);
      } else {
        arr.push(`${num} minute`);
      }
      seconds -= num * minute;
    }

    if (seconds >= second) {
      num = Math.floor(seconds / second);
      if (num > 1) {
        arr.push(`${num} seconds`);
      } else {
        arr.push(`${num} second`);
      }
      seconds -= num * second;
    }
    if (arr.length === 2) {
      sentence = `${arr[0]} and ${arr[1]}`;
    } else if (arr.length > 2) {
      for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 2) {
          sentence += arr[i] + ', ';
        } else if (i === arr.length - 2) {
          sentence += arr[i] + ' and ';
        } else {
          sentence += arr[i];
        }
      }
    } else {
      sentence = arr.toString();
    }
    console.log(sentence);
    return sentence;
  }
  formatDuration(62);
  formatDuration(3662);
})();
