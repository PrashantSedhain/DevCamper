
// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public

exports.getBootcamps = (req, res,next)=> {
    res.status(200).json({success: 'Show all bootcamps'});
}

// @desc    Get one bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public

exports.getBootcamp = (req, res,next)=> {
    res.status(200).json({success: true, msg: `get bootcamp ${req.params.id}`});
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/
// @access  Private (must be logged in)

exports.createBootcamp = (req, res,next)=> {
    res.status(200).json({success: true, msg: `create bootcamp ${req.params.id}`});
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private (must be logged in)

exports.updateBootcamp = (req, res,next)=> {
    res.status(200).json({success: true, msg: `update bootcamp ${req.params.id}`});
}

// @desc    Create new bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private (must be logged in)

exports.deleteBootcamp = (req, res,next)=> {
    res.status(200).json({success: true, msg: `delete bootcamp ${req.params.id}`});
}





