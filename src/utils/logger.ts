import logger from "pino"
import dayjs from "dayjs"

// logger config
const log = logger({
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"` // timestamp formatting
});

export default log;