exports.getTasks = (req, res, next) => {
    res.status(200).json({
        tasks: []
    });
};