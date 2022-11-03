import classes from './Title.module.css'

type TitleProps = {
    titleName: string;
}

const Title = (props:TitleProps) : JSX.Element => {
    return <div className={classes.title}>{props.titleName}</div>
};

export default Title;
