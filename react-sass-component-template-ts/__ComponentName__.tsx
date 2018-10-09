import * as React /* IF class */ /* ENDIF */ from "react";
/* ENDIF */
import styles from "./__ComponentName__.scss";
import * as classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface __ComponentName__Props {}

/* IF !class */
const __ComponentName__: React.SFC<__ComponentName__Props> = () => (
  <div>__ComponentName__</div>
); /* IF class*/
/* ENDIF */ class __ComponentName__ extends React.Component<
  __ComponentName__Props
> {
  public render() {
    return <div>__ComponentName__</div>;
  }
}
/* ENDIF */

export default __ComponentName__;
