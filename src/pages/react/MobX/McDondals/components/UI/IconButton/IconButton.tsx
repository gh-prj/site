import React, { CSSProperties, FC } from 'react';
import styles from './IconButton.module.scss'

type ButtonType = "add" | "save" | "remove" | "edit" | "restore" | "cancel"

const ButtonIconData: { [key in ButtonType]: { code: string, tooltip: string } } = {
    add: { code: '\uf0fe', tooltip: 'Add' },
    remove: { code: '\uf2ed', tooltip: 'Remove' },
    save: { code: '\uf0c7', tooltip: 'Save' },
    edit: { code: '\uf044', tooltip: 'Edit' },
    restore: { code: '', tooltip: 'Restore' },
    cancel: { code: '\uf0e2', tooltip: 'Cancel' },
    // cancel: '&#xf0e2;',
}

interface Props extends React.ComponentProps<"span"> {
    type: ButtonType
    children?: string
    onClick: () => void
    disabled: () => boolean
}

const IconButton: FC<Props> = (
    {
        type,
        children,
        onClick,
        disabled,
        style,
        ...props
    }) => {
    return (
        <span {...props}
            style={
                {
                    ...style || {},
                    "--tooltip": `"${children ?? ButtonIconData[type].tooltip}"`
                } as CSSProperties
            }
            data-icon={ButtonIconData[type].code}
            className={`${styles.iconButton} ${disabled() ? styles.disabled : ""}`}
            onClick={onClick}
        ></span >
    );
}

export default IconButton;
