var Snackbar = document.getElementById('snack'),
    Animal = document.getElementById('animal');

var map = {};
map["fox"] = { task1: "Лиса хитрый зверь", task2: "Он ничем не отличался от ста тысяч других лисиц", task3: "Рыжий лис" };
map["wolf"] = { task1: "Волк вожак стаи", task2: "Волк собирает грибы в лесу", task3: "Волк меняет шкуру, но не нрав" };
map["pig"] = { task1: "Кабан дикий свин", task2: "Кабан свинья, которая не поддалась на уговоры", task3: "Кабан санитар леса" };

class snackbar {
    ShowSnackbar(task, fontColor, bgColor, position) {
        Snackbar.innerHTML = SelectTextByTask(Animal.value, task);
        Snackbar.style.backgroundColor = bgColor;
        Snackbar.style.color = fontColor;
        if (position == 'bottom') {
            Snackbar.style.bottom = Snackbar.style.left = '0px';
            Snackbar.style.top = Snackbar.style.right = '';
        } else {
            Snackbar.style.right = Snackbar.style.top = '0px';
            Snackbar.style.bottom = Snackbar.style.left = '';
        }
        Snackbar.style.display = 'block';
    }
    Exit() {
        Snackbar.style.display = 'none';
    }
}
const alert = new snackbar();
function ShowSnackbar(task) {
    clearTimeout(CloseTimer);
    alert.Exit();
    var SnackbarParams = GetSnackbarParams(task);
    alert.ShowSnackbar(task, SnackbarParams[0], SnackbarParams[1], SnackbarParams[2]);
    var CloseTimer = setTimeout(function () {
        alert.Exit();
    }, 3000);
}
function SelectTextByTask(select, task) {
    return map[select][task]
}

function GetSnackbarParams(task) {
    return {
        "task1": ['#ecf0f1', '#27ae60', 'bottom'],
        "task2": ['#ecf0f1', '#8e44ad', 'right'],
        "task3": ['#ecf0f1', '#34495e', 'right'],
    }[task];
}
