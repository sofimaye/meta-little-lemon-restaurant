const times = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00']
const parseHour = (time) => parseInt(time.split(':')[0]);

const fetchAPI = date => {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    if (date === today){
        return times.filter((time) => parseHour(time) > now.getHours());
    }else{
        return times;
    }
}

export {
    fetchAPI
};
