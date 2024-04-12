import style from '@/styles/components/Option.module.css';

export default function Option({ icon,value, checked, product}){
	return(
		<div className={style.form} style={{width:300}}>
			<input type='radio' className="form-check-input" name='product' onChange={product}/>
			<span className={style.label}> {value}</span>
		</div>
	)
}