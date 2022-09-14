class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;

    }

    addClock(time, func, id) {
        if (!id) {
            throw new Error("не передан идентификатор!");
        }

        if (this.alarmCollection.some( el => el.id === id )) {
            console.error("будильник с таким id уже существует");
            return;
        }

        this.alarmCollection.push({time, func, id});
    }

    removeClock(id) {
        let lengthBefore = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(el => el.id !== id);
        return lengthBefore !== this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        const date = new Date;
        return String(date.getHours()).padStart(2, '0') + ":" + String(date.getMinutes()).padStart(2, '0');
    }

    start() {
        if (this.timerId) {
            return;
        }

        const checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.func();
            }
        }

        this.timerId = setInterval(() => {
            this.alarmCollection.forEach(checkClock);
        }, 1000)
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    
    printAlarms() {
        this.alarmCollection.forEach(el => {
            console.log("Идентификатор:" + el.id + " Время:" + el.time);
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}



function testCase() {
    const alarms = new AlarmClock;

    alarms.addClock('21:19', () => console.log("Первый будильник"), 1);
    
    alarms.addClock('21:20', () => {
        console.log("Текст для проверки второй");
        alarms.removeClock(2);
    }, 2);
    
    alarms.addClock('21:21', () => console.log("Третий будильник"));
    
    alarms.addClock('21:22', () => {
        console.log("Четвёртый будильник");
        alarms.clearAlarms();
        alarms.printAlarms();
    }, 3)
    
    console.log(alarms.alarmCollection);
    
    alarms.printAlarms();
    
    alarms.start();
}

testCase();