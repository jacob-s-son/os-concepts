// Generated by CoffeeScript 1.6.2
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  App.ProcessAnimator = (function() {
    function ProcessAnimator() {
      this.process = __bind(this.process, this);
      this.animateWidth = __bind(this.animateWidth, this);
      this.enequeProcess = __bind(this.enequeProcess, this);      this.processCache = {};
      this.defaultUnitSize = 5;
    }

    ProcessAnimator.prototype.enequeProcess = function(process, units) {
      return App.AnimationWorker.eneque(new App.Job({
        id: process.id,
        units: units
      }, this.animateWidth));
    };

    ProcessAnimator.prototype.animateWidth = function(process) {
      return this.process(process.id).animate({
        width: "" + (this.process(process.id).width() + process.units * this.defaultUnitSize) + "px"
      }, 500);
    };

    ProcessAnimator.prototype.process = function(processId) {
      var _base, _name, _ref;

      return (_ref = (_base = this.processCache)[_name = "" + processId]) != null ? _ref : _base[_name] = $("#process-" + processId);
    };

    return ProcessAnimator;

  })();

}).call(this);
