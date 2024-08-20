const bcrypt = require("bcrypt");

class HashPassword{
    async createHash(password, saltRound){
        const salt = await bcrypt.genSalt(saltRound);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }

    async compareHash(password, hash){
        const result = await bcrypt.compare(password, hash);
        return result;
    }
}

module.exports = HashPassword;