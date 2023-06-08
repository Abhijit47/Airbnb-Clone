import SimpleReactCalender from 'simple-react-calendar';
import 'simple-react-calendar/dist/simple-calendar';

const Calender = () => {
  return (
    <div className='hstack justify-content-center mb-2'>
      <button className='btn btn-light bg-white border border-0 shadow-sm'>Search date</button>
      <SimpleReactCalender headerNextTitle={"Next month"} rangeLimit={2} />
    </div>
  );
};

export default Calender;