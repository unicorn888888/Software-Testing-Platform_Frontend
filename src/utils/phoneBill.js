function getBill(input) {
  const minutes=input["time"];
  const times=input["count"];

    if (minutes >= 0 && minutes < 44641 && times >= 0 && times < 12) {
        if (minutes <= 60) {
            if (times <= 1) {
                return 25 + minutes * 0.15 * (1 - 0.01);
            } else {
                return 25 + minutes * 0.15;
            }
        } else if (minutes <= 120) {
            if (times <= 2) {
                return 25 + minutes * 0.15 * (1 - 0.015);
            } else {
                return 25 + minutes * 0.15;
            }
        } else if (minutes <= 180) {
            if (times <= 3) {
                return 25 + minutes * 0.15 * (1 - 0.02);
            } else {
                return 25 + minutes * 0.15;
            }
        } else if (minutes <= 300) {
            if (times <= 3) {
                return 25 + minutes * 0.15 * (1 - 0.025);
            } else {
                return 25 + minutes * 0.15;
            }
        } else {
            if (times <= 6) {
                return 25 + minutes * 0.15 * (1 - 0.03);
            } else {
                return 25 + minutes * 0.15;
            }
        }
    } else {
        return '超过范围';
    }
}

export{getBill}
