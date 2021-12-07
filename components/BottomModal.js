import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../constants';

const BottomModal = ({children, onClose}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.transparentBlack3,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 20,
        justifyContent: 'flex-end',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={{
          backgroundColor: COLORS.transparentBlack3,
          flex: 1,
        }}>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: COLORS.lightGray,
          borderWidth: 1,
          borderColor: COLORS.lightGray,
          borderTopLeftRadius: SIZES.radius,
          borderTopRightRadius: SIZES.radius,
          padding: SIZES.base,
        }}>
        <TouchableOpacity onPress={onClose} activeOpacity={0.5}>
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 80,
                height: 5,
                backgroundColor: COLORS.gray,
                borderRadius: SIZES.radius,
              }}
            />
          </View>
        </TouchableOpacity>

        {children}

      </View>
    </View>
  );
};

export default BottomModal;
