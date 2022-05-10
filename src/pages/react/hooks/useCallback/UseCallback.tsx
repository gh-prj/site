import React, { useCallback, useMemo, useState } from 'react';
import Button, { MemoizedButton } from '../../../../components/UI/Button';
import Label from '../../../../components/UI/Label';
import styles from './UseCallback.module.scss'

const UseCallback = () => {
    const [value, setValue] = useState(0);
    const onClick = () => {
        setValue(x => x + 1)
    }
    const cb = useCallback(() => onClick(), [])
    const styleBtn = useMemo(() => ({ borderRadius: 5 }), [])
    return (
        <div className={styles.container}>
            <Label style={{ background: '#dfd', border: '2px solid #595959' }} showRenders title="State">{value}</Label>
            <Button onClick={onClick} showRenders title="onClick = {...}" style={{ borderRadius: 5 }}>State += 1</Button>
            <MemoizedButton onClick={cb} showRenders title="memo+useCallback" style={styleBtn}>State += 1</MemoizedButton>
        </div>
    );
}

export default UseCallback;
