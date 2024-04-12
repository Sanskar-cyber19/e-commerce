import style from '@/styles/components/Text.module.css';

export default function Text({icon, type, value, onChange, text}){
	return(
		<div className={style.form} style={{width:300}}>
			<span className={icon}></span>
			<input type={type} placeholder={text} className={style.input} value={value} onChange={(e)=>onChange(e.target.value)} required/>
		</div>
	)
}