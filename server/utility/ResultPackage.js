class ResultPackage {
    constructor(data = null, message, error, status, timestamp = new Date()) {
        this.data = data;
        this.message = message;
        this.error = error;
        this.status = status;
        this.timestamp = timestamp;
    }

    getResult() {
        return {
            data: this.data,
            message: this.message,
            error: this.error,
            status: this.status,
            timestamp: this.timestamp,
        };
    }
}

module.exports = ResultPackage;