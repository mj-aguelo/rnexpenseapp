import CustomTextInput from 'components/atoms/CustomTextInput';
import React, {FC, useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {formatDate} from 'utils/dateFormatter';

export interface IDateInputPickerProps {
  onChange?: Function;
}

const DateInputPicker: FC<IDateInputPickerProps> = ({onChange}) => {
  const [date, setDate] = useState<Date>(new Date());
  const [showPicker, setShow] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(
    function setDefaultValueOnMount() {
      if (!loaded && onChange) {
        onChange(new Date());
        setLoaded(true);
      }
    },
    [loaded, onChange],
  );

  return (
    <>
      <CustomTextInput
        label={'Date'}
        editable={false}
        value={`${formatDate(date)}`}
        onPressIn={() => setShow(true)}
      />

      <DatePicker
        modal
        mode="date"
        date={date}
        open={showPicker}
        onConfirm={dt => {
          setShow(false);
          setDate(dt);
          onChange && onChange(dt);
        }}
        onCancel={() => setShow(false)}
      />
    </>
  );
};

export default DateInputPicker;
