import {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Base class to all TimeSelect's.
 */
export default class BaseTimeSelect extends Component {
  static propTypes = {
    /**
     * Time, selected by default.
     */
    selectedTime: PropTypes.instanceOf(Date),
    /**
     * On time change callback
     */
    onTimeChange: PropTypes.func,
  }

  static defaultProps = {
    selectedTime: new Date(),
    onTimeChange: () => {},
  }

  /**
   * @param {Props} props - the props
   */
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      selectedTime: new Date(),
    };

    this.changePressed = this.changePressed.bind(this);
    this.setTime = this.setTime.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
  }

  /**
   * Changes state pressed to opposite value.
   */
  changePressed() {
    this.setState({pressed: !this.state.pressed});
  }

  /**
   * Sets state time.
   * @param {Date} newTime - new choosen time
   */
  setTime(newTime) {
    /**
     * As callback is being passed return of
     * Date(), not object.
     */
    newTime = new Date(newTime);
    this.setState({selectedTime: newTime});
  }

  /**
   * press handler
   */
  onPress() {
    this.changePressed();
  }

  /**
   * On time change handler.
   * Sets time attribute in this.state.
   * @param {Date} newTime - new chosen date
   */
  onTimeChange(newTime) {
    this.changePressed();
    this.setTime(newTime);
    /**
     * Callback.
     */
    this.props.onTimeChange(newTime);
  }

  /**
   * @param {Date} time - the time
   * @return {String} 'HH:MM' formatted time
   */
  formatTime(time) {
    let hh = time.getHours() < 10 ?
      '0' + time.getHours() : time.getHours();
    let min = time.getMinutes() < 10 ?
      '0' + time.getMinutes() : time.getMinutes();
    return ''.concat(hh).concat(':').concat(min);
  }

  /**
   * Basic class, renders nothing.
   * @return {React.Node} null
   */
  render() {
    return null;
  }
}
