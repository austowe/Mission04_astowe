using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_astowe.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0, 100)]
        public string assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public string project { get; set; }

        [Required]
        [Range(0, 100)]
        public string quiz { get; set; }

        [Required]
        [Range(0, 100)]
        public string midterm { get; set; }

        [Required]
        [Range(0, 100)]
        public string final { get; set; }

        [Required]
        [Range(0, 100)]
        public string intex { get; set; }
    }
}
