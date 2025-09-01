// const mongoose = require('mongoose');

// const studentSchema = new mongoose.Schema({
//   enrollmentNo: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     lowercase: true
//   },
//   branch: {
//     type: String,
//     required: true
//   },
//   year: {
//     type: String,
//     required: true,
//     enum: ['1st Year', '2nd Year', '3rd Year', '4th Year']
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// // Index for better query performance
// studentSchema.index({ enrollmentNo: 1 });
// studentSchema.index({ email: 1 });
// studentSchema.index({ year: 1 });

// // Check if the model has already been compiled
// module.exports = mongoose.models.Student || mongoose.model('Student', studentSchema);











const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
   createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
   email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  enrollmentNo: {
    type: String,
    required: [true, 'Enrollment number is required'],
    unique: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^[0-9]{8,}$/.test(v);
      },
      message: 'Enrollment number should be at least 8 digits'
    }
  },
  name: {
    type: String,
    required: [true, 'Student name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
 phonenumber: {
  type: Number,
  required: true

 },
  branch: {
    type: String,
    required: [true, 'Branch is required'],
    trim: true,
    maxlength: [100, 'Branch cannot be more than 100 characters']
  },
  year: {
    type: String,
    required: [true, 'Year is required'],
    enum: {
      values: ['1st Year', '2nd Year', '3rd Year', '4th Year'],
      message: 'Year must be one of: 1st Year, 2nd Year, 3rd Year, 4th Year'
    },
    trim: true
  }
 
});

// Update the updatedAt field before saving
studentSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Index for better query performance
studentSchema.index({ enrollmentNo: 1 });
studentSchema.index({ email: 1 }, { unique: true });
studentSchema.index({ year: 1 });

// Static method to find by enrollment number
studentSchema.statics.findByEnrollment = function(enrollmentNo) {
  return this.findOne({ enrollmentNo });
};

// Instance method to get student info
studentSchema.methods.getInfo = function() {
  return `${this.name} (${this.enrollmentNo}) - ${this.year}, ${this.branch}`;
};

// Export the model correctly
const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);
module.exports = Student;