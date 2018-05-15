import {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Base class to all DateSelect's.
 */
export default class BaseDateSelect extends Component {
  static propTypes = {
    /**
     * Minimal allowed date.
     */
    minDate: PropTypes.instanceOf(Date),
    /**
     * Maximal allowed date.
     */
    maxDate: PropTypes.instanceOf(Date),
    /**
     * On date change callback.
     */
    onDateChange: PropTypes.func,
  }

  static defaultProps = {
    minDate: null,
    maxDate: null,
    onDateChange: (newDate) => {},
  }

  /**
   * @param {Props} props - the props
   */
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      selectedDate: new Date(),
    };

    this.changePressed = this.changePressed.bind(this);
    this.setDate = this.setDate.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }

  /**
   * Changes state pressed to opposite value.
   */
  changePressed() {
    this.setState({pressed: !this.state.pressed});
  }

  /**
   * Sets state date.
   * @param {Date} newDate - new choosen date
   */
  setDate(newDate) {
    /**
     * As callback is being passed return of
     * Date(), not object.
     */
    newDate = new Date(newDate);
    this.setState({selectedDate: newDate});
  }

  /**
   * press handler
   */
  onPress() {
    this.changePressed();
  }

  /**
   * On date change handler.
   * Sets date attribute in this.state.
   * @param {Date} newDate - new choosen date
   */
  onDateChange(newDate) {
    this.changePressed();
    this.setDate(newDate);
    /**
     * Callback.
     */
    this.props.onDateChange(newDate);
  }

  /**
   * @param {Date} date - the date
   * @return {String} 'YYYY-MM-DD' formatted date
   */
  formatDate(date) {
    let yyyy = date.getFullYear();
    /**
     * getMonth() is zero-based
     */
    let mm = date.getMonth() < 9 ?
      '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    let dd = date.getDate() < 10 ?
      '0' + date.getDate() : date.getDate();
    return ''.concat(yyyy).concat('-').concat(mm).concat('-').concat(dd);
  }

  /**
   * Basic class, renders nothing.
   * @return {React.Node} null
   */
  render() {
    return null;
  }
}
