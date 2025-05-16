const circleVariants = (x_pos, y_pos, duration, delay) => {
    return {
        animate: {
            x: [0, x_pos, 0], // Start position defined using top, left, right and bottom values
            y: [0, y_pos, 0],
            transition: {
                delay: delay || 0,
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                ease: [0.76, 0, 0.24, 1]
            },
        }
    }
}

const circleStyle = (colour, size, position) => {
    return `bg-[${colour}] w-[${size}px] aspect-square absolute -z-20 shadow-md rounded-full  hidden xl:block` + 
        (position.bottom ? `bottom-[${position.bottom}]` : '') + 
        (position.top ? `top-[${position.top}]` : '') +
        (position.left ? `left-[${position.left}]` : '') + 
        (position.right ? `right-[${position.right}]` : '')
}

export { circleVariants, circleStyle }