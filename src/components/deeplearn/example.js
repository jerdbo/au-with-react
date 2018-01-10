import { NDArrayMathGPU ,Array1D,Scalar} from "deeplearn";
import util from "util";
import { inlineView, injec } from "aurelia-framework";
@inlineView(`
 <template>
    <div class="pg-toolbar">
    this is from deeplearnjs
         <button click.trigger="calculate()">
            click me
         </button>
    </div>
 </template>
`)
export class deepDemo {
  math
  constructor() { 
    this.math=new NDArrayMathGPU();
  }
  calculate() {

    const a = Array1D.new([1, 2, 3]);
    const b = Scalar.new(2);

    this.math.scope(() => {
      const result = this.math.add(a, b);
      console.log(a);
       document.body.append(util.inspect(result));
    });
  }

}


