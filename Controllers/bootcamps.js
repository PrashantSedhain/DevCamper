const Bootcamp = require('../models/Bootcamp');
// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public

exports.getBootcamps = async (req, res,next)=> {

    try{

        const bootcamps = await Bootcamp.find();

        res.status(200).json({success: true, data: bootcamps});

    } catch (err) {

        res.status(400).json({success: false});
    }
}

// @desc    Get one bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public

exports.getBootcamp = async (req, res,next)=> {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if(!bootcamp)
        {
            return res.status(400).json({success: false, msg: "No item found with that ID."});
        }
    } catch (err) {
        res.status(400).json({success: false});
    }

  
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/
// @access  Private (must be logged in)

exports.createBootcamp = async (req, res, next)=> {

    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
        success: true,
        data: bootcamp
    })
    // try{
    //     const bootcamp = await Bootcamp.create(req.body);

    //     res.status(201).json({
    //         success: true,
    //         data: bootcamp
    //     });
    // } catch (err) {
    //     res.status(400).json({success: false})
    // }
    
};

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





