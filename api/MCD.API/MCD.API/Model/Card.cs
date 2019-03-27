using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MCD.API.Model
{
    public class Card
    {
        public virtual string Name { get; set; }
        public virtual string Image { get; set; }
        //public virtual 
        //TODO: fijarse como meter mas de 1 atk (fire y earth o lo q sea) y las pasivas
    }
}
