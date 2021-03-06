// StepType model
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StepType', {
    name: {
      type: DataTypes.STRING(50),
      unique: true
    },
    icon: {
      type: DataTypes.STRING(50)
    },
    properties: {
      type: DataTypes.TEXT
    }
  }, {
    classMethods: {
      associate: function(models) {
        const Step = models['Step'];
        const StepType = models['StepType'];

        StepType.hasMany(Step);
      }
    }
  }, {
    // Enable timestamps
    timestamps: true
  }, {
    getterMethods: {},
    setterMethods: {}
  });
};
