import * as React from 'react';

// from + validation
import { useFormik } from 'formik'
import * as Yup from 'yup'

import './Comparison.css';

const initialValues = {
  height: '',
  weight: '',
  bodyFat:'',
  handLength: '',
  handWidth: '',
  standingVerticalLeap: '',
  maxVerticalLeap: '',
  standingReach: '',
  wingspan: '',
  age: '',

  // heigh2: '',
  // weight2: '',
  // bodyFat2:'',
  // dash40: '',
  // benchpress: '',
  // standingVerticalLeap2: '',
  // maxVerticalLeap2: '',
  // broadJump: '',
  // shuttle20: '',
  // age2: ''
}

const onSubmit = values => {
  
  let result = ["Survey Result: "];
  
  if (parseInt(values.height) < 170){
    result.push("The height of the subject is a rarity in the professional league. The only conceivable position is PG. ");
  } else if (parseInt(values.height) < 180) {
    result.push("Nor is this the ideal height for a professional basketball player, but it can be good for an additional Guard player. ")
  } else if (parseInt(values.height) < 190) {
    result.push("It is a little smaller than the average than the usual height, but with its other qualities this gap can be replaced. ")
  } else if (parseInt(values.height) < 195) {
    result.push("This is the average height among professional players. It can be used in almost any position. ")
  } else if (parseInt(values.height) < 200) {
    result.push("Ideal height, most dominant players are in this range. ")
  } else if (parseInt(values.height) < 205) {
    result.push("With this height, it can already be suitable for internal positions, such as Forward or Center. ")
  } else if (parseInt(values.height) < 210) {
    result.push("With this height, it is already well above the league average. It won't depend on that. ")
  } else if (parseInt(values.height) < 220) {
    result.push("This height is already well above the average of the highest Center position. ")
  } else if (parseInt(values.height) < 235) {
    result.push("With this size, you only have to pay attention to the other abilities. ")
  } else {
    result.push("Players of this size have not played in the league yet. ");
  }

  if (parseInt(values.weight) < 75){
    result.push("With such weight, it is not worth starting a professional career. ");
  } else if (parseInt(values.weight) < 80) {
    result.push("It is still acceptable for junior players, but a lot of muscle building will be needed later. ");
  } else if (parseInt(values.weight) < 85) {
    result.push("A lot of work needs to be done to reach the right weight level for the player. ");
  } else if (parseInt(values.weight) < 90) {
    result.push("This is the ideal weight value for a player applying for a Guard position. ");
  } else if (parseInt(values.weight) < 95) {
    result.push("This value is in the average range of players in the league. It can be a Guard or Forward player. ");
  } else if (parseInt(values.weight) < 100) {
    result.push("This weight is already above the league average. It can be a Guard or Forward player. ");
  } else if (parseInt(values.weight) < 105) {
    result.push("Players in higher positions have such weight parameters. It can be a Center or Forward player. ");
  } else if (parseInt(values.weight) < 110) {
    result.push("This is a very massive weight, which is the upper acceptable limit even for a dominant player. ");
  } else if (parseInt(values.weight) < 120) {
    result.push("This weight is also an outstanding value among players in high positions, to the detriment of athleticism. ");
  } else {
    result.push("With such weight parameters, it is not worth choosing a basketball because it is dangerous to injure. ");
  }

  if (parseInt(values.bodyFat) < 3){
    result.push("Perfect structure. ");
  } else if (parseInt(values.bodyFat) < 5) {
    result.push("Close to the perfect build. ");
  } else if (parseInt(values.bodyFat) < 10) {
    result.push("That's plenty of body fat. ");
  } else if (parseInt(values.bodyFat) < 15) {
    result.push("This percentage of body fat hits the acceptable upper limit. ");
  } else if (parseInt(values.bodyFat) < 20) {
    result.push("Here you need to start a serious diet before a professional career. ");
  } else {
    result.push("In modern basketball, with such a body fat composition, it is inconceivable to get into the elite. ");
  }

  if (parseInt(values.handLength) < 15){
    result.push("You will not be able to play accurately with a small palm. ");
  } else if (parseInt(values.handLength) < 17) {
    result.push("This hand size is the minimum requirement to enter the league. ");
  } else if (parseInt(values.handLength) < 19) {
    result.push("Most young players have smaller palms, but this is not an exclusionary factor for entering the league. ");
  } else if (parseInt(values.handLength) < 21) {
    result.push("Player with an average palm size. ");
  } else if (parseInt(values.handLength) < 23) {
    result.push("The larger the palm player, the more options in handling the ball. ");
  } else if (parseInt(values.handLength) < 25) {
    result.push("This palm size is in the top 10 percent of the league. ");
  } else {
    result.push("A player with such a palm does not often face the field. ");
  }

  if (parseInt(values.handWidth) < 15){
    result.push("This size of palm width is unfortunately not enough for basketball. ");
  } else if (parseInt(values.handWidth) < 20) {
    result.push("The player’s palm width is smaller than the average player, but he can stand his ground in the league with it. ");
  } else if (parseInt(values.handWidth) < 25) {
    result.push("The player's palm width is in the appropriate range. ");
  } else if (parseInt(values.handWidth) < 30) {
    result.push("The palm width of this size is abundant among the largest among active players. ");
  } else {
    result.push("Not many people with such a palm width live on Earth. ");
  }

  if (parseInt(values.standingVerticalLeap) < 50){
    result.push("With such a vertical jump, there is no chance of getting into the professional league. ");
  } else if (parseInt(values.standingVerticalLeap) < 60) {
    result.push("With such a vertical jump, you have a chance to get into the lower Guard positions. ");
  } else if (parseInt(values.standingVerticalLeap) < 70) {
    result.push("With such a vertical jump, you have a chance to get into the lower Guard positions. ");
  } else if (parseInt(values.standingVerticalLeap) < 75) {
    result.push("With such a vertical jump, you have a chance to get into the middle Guard positions. ");
  } else if (parseInt(values.standingVerticalLeap) < 80) {
    result.push("With such a vertical jump, you have a chance to get into the middle Guard and Forward positions. ");
  } else if (parseInt(values.standingVerticalLeap) < 85) {
    result.push("With such a vertical jump, it is well above average. It can be Guard, Forward or Lower Center. ");
  } else if (parseInt(values.standingVerticalLeap) < 90) {
    result.push("With such a vertical jump, it is well above average. It can be Forward or Lower Center. ");
  } else if (parseInt(values.standingVerticalLeap) < 95) {
    result.push("With such a vertical jump, you can already stand out from the field, it can be suitable for any position. ");
  } else if (parseInt(values.standingVerticalLeap) < 100) {
    result.push("With such a vertical jump, she is already a member of the narrow elite. ");
  } else {
    result.push("Only the most athletic players ever have such a vertical jump. ");
  }

  if (parseInt(values.maxVerticalLeap) < 60){
    result.push("Amateurs have such a jump. ");
  } else if (parseInt(values.maxVerticalLeap) < 70) {
    result.push("Low jumps have such a jump. ");
  } else if (parseInt(values.maxVerticalLeap) < 80) {
    result.push("This is a jump for low players, but a good level for the Guard position. ");
  } else if (parseInt(values.maxVerticalLeap) < 90) {
    result.push("This is the jump that low players have, but the right level for the Forward position. ");
  } else if (parseInt(values.maxVerticalLeap) < 100) {
    result.push("This is a jump for low players, but a good level for the Center position. ");
  } else if (parseInt(values.maxVerticalLeap) < 110) {
    result.push("Very few players have such a large jump. ");
  } else {
    result.push("The slam dunk champions have such a jump. ");
  }

  if (parseInt(values.standingReach) < 230){
    result.push("This Standing Reach is very low to enter the league. ");
  } else if (parseInt(values.standingReach) < 240) {
    result.push("This Standing Reach in the league is the minimum requirement. ");
  } else if (parseInt(values.standingReach) < 250) {
    result.push("This Standing Reach is significantly below average. ");
  } else if (parseInt(values.standingReach) < 260) {
    result.push("This Standing Reach is a little below average. ");
  } else if (parseInt(values.standingReach) < 270) {
    result.push("This Standing Reach is the average level. ");
  } else if (parseInt(values.standingReach) < 280) {
    result.push("This Standing Reach is for the more successful players. ");
  } else if (parseInt(values.standingReach) < 290) {
    result.push("This Standing Reach stands out from the field. ");
  } else if (parseInt(values.standingReach) < 300) {
    result.push("This Standing Reach is very rare in the league. ");
  } else {
    result.push("This Standing Reach is unique in the league. ");
  }

  if (parseInt(values.wingspan) < 180){
    result.push("This Wingspan is not enough to get into. ");
  } else if (parseInt(values.wingspan) < 190) {
    result.push("This Wingspan is the minimum required level. ");
  } else if (parseInt(values.wingspan) < 200) {
    result.push("This Wingspan is lower than average. ");
  } else if (parseInt(values.wingspan) < 210) {
    result.push("This Wingspan is the average among players. ");
  } else if (parseInt(values.wingspan) < 230) {
    result.push("This Wingspan stands out from the field. ");
  } else if (parseInt(values.wingspan) < 240) {
    result.push("This Wingspan is rare among players. ");
  } else {
    result.push("This Wingspan is unique in the history of the game. ");
  }

  if (parseInt(values.age) < 16){
    result.push("A player cannot play at such a young age. ");
  } else if (parseInt(values.age) < 18) {
    result.push("This is the ideal age for the Draft. ");
  } else if (parseInt(values.age) < 20) {
    result.push("At such an old age, you have to play in a lower league to become a pro later. ");
  } else if (parseInt(values.age) < 22) {
    result.push("At such an old age, you have to play in a lower league to become a pro later. ");
  } else if (parseInt(values.age) < 25) {
    result.push("At this age, it’s almost the last chance to get on a team. ");
  } else {
    result.push("By this age, they are very rarely included in the league. ");
  }

  // console.log(result.join(' '));
  // const writeResult = document.querySelector("#result");
  // writeResult.innterText = "bla";
  // alert(result);
  // console.log(parseInt(values.weight) + parseInt(values.height));

  document.getElementById("result").innerHTML = result.join(' ');

}

  // if (parseInt(values.age) < 170){
  //   result.push(" ");
  // } else if (parseInt(values.age) < 180) {
  //   result.push(" ");
  // } else if (parseInt(values.age) < 190) {
  //   result.push(" ");
  // } else if (parseInt(values.age) < 195) {
  //   result.push(" ");
  // } else if (parseInt(values.age) < 200) {
  //   result.push(" ");
  // } else {
  //   result.push(" ");
  // }

const validationSchema = Yup.object({
  height: Yup.number().required('Required').positive(),
  weight: Yup.number().required('Required').positive(),
  bodyFat: Yup.number().required('Required').positive(),
  handLength: Yup.number().required('Required').positive(),
  handWidth: Yup.number().required('Required').positive(),
  standingVerticalLeap: Yup.number().required('Required').positive(),
  maxVerticalLeap: Yup.number().required('Required').positive(),
  standingReach: Yup.number().required('Required').positive(),
  wingspan: Yup.number().required('Required').positive(),
  age: Yup.number().required('Required').positive()
})

// const validationSchema2 = Yup.object({
//   height: Yup.number().required('Required').positive(),
//   weight: Yup.number().required('Required').positive(),
//   bodyFat: Yup.number().required('Required').positive(),
//   handLength: Yup.number().required('Required').positive(),
//   handWidth: Yup.number().required('Required').positive(),
//   standingVerticalLeap: Yup.number().required('Required').positive(),
//   maxVerticalLeap: Yup.number().required('Required').positive(),
//   standingReach: Yup.number().required('Required').positive(),
//   wingspan: Yup.number().required('Required').positive(),
//   age: Yup.number().required('Required').positive()
// })

const Comparison = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validationSchema2
  })

  return (
    <>
      <div className="comp-form">
        <div className="center">
            <form onSubmit={formik.handleSubmit}>
              <div className='header1' >Draft Combine</div>
              <br />
              
              <label htmlFor='height'>Height (cm)</label>
              <input
                type='text'
                id='height'
                name='height'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.height}
              />
              {formik.touched.height && formik.errors.height ? (
                <div className='error'>{formik.errors.height}</div>
              ) : null}

              <label htmlFor='weight'>Weight (kg)</label>
              <input
                type='text'
                id='weight'
                name='weight'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.weight}
              />
              {formik.touched.weight && formik.errors.weight ? (
                <div className='error'>{formik.errors.weight}</div>
              ) : null}
              
              <label htmlFor='bodyFat'>Body Fat %</label>
              <input
                type='text'
                id='bodyFat'
                name='bodyFat'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bodyFat}
              />
              {formik.touched.bodyFat && formik.errors.bodyFat ? (
                <div className='error'>{formik.errors.bodyFat}</div>
              ) : null}

              <label htmlFor='handLength'>Hand Length (cm)</label>
              <input
                type='text'
                id='handLength'
                name='handLength'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.handLength}
              />
              {formik.touched.handLength && formik.errors.handLength ? (
                <div className='error'>{formik.errors.handLength}</div>
              ) : null}

              <label htmlFor='handWidth'>Hand Width (cm)</label>
              <input
                type='handWidth'
                id='handWidth'
                name='handWidth'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.handWidth}
              />
              {formik.touched.handWidth && formik.errors.handWidth ? (
                <div className='error'>{formik.errors.handWidth}</div>
              ) : null}

              <label htmlFor='standingVerticalLeap'>Standing Vertical Leap (cm)</label>
              <input
                type='text'
                id='standingVerticalLeap'
                name='standingVerticalLeap'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.standingVerticalLeap}
              />
              {formik.touched.standingVerticalLeap && formik.errors.standingVerticalLeap ? (
                <div className='error'>{formik.errors.standingVerticalLeap}</div>
              ) : null}

              <label htmlFor='maxVerticalLeap'>Max Vertical Leap (cm)</label>
              <input
                type='text'
                id='maxVerticalLeap'
                name='maxVerticalLeap'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.maxVerticalLeap}
              />
              {formik.touched.maxVerticalLeap && formik.errors.maxVerticalLeap ? (
                <div className='error'>{formik.errors.maxVerticalLeap}</div>
              ) : null}

              <label htmlFor='standingReach'>Standing Reach (cm)</label>
              <input
                type='text'
                id='standingReach'
                name='standingReach'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.standingReach}
              />
              {formik.touched.standingReach && formik.errors.standingReach ? (
                <div className='error'>{formik.errors.standingReach}</div>
              ) : null}

              <label htmlFor='wingspan'>Wingspan (cm)</label>
              <input
                type='text'
                id='wingspan'
                name='wingspan'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.wingspan}
              />
              {formik.touched.wingspan && formik.errors.wingspan ? (
                <div className='error'>{formik.errors.wingspan}</div>
              ) : null}

              <label htmlFor='age'>Age</label>
              <input
                type='text'
                id='age'
                name='age'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
              />
              {formik.touched.age && formik.errors.age ? (
                <div className='error'>{formik.errors.age}</div>
              ) : null}

              <button type='submit' className="submit">Submit</button>

              <br /> 
            </form>
        </div>

        {/* <hr /> */}

        {/* <div className="center">
            <form onSubmit={formik.handleSubmit}>
                  <div className='header1' >NFL Combine</div>
                  <br />
                  
                  <label htmlFor='height2'>Height (cm)</label>
                  <input
                    type='text'
                    id='height2'
                    name='height2'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.height2}
                  />
                  {formik.touched.height2 && formik.errors.height2 ? (
                    <div className='error'>{formik.errors.height2}</div>
                  ) : null}

                  <label htmlFor='weight2'>Weight (kg)</label>
                  <input
                    type='text'
                    id='weight2'
                    name='weight2'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.weight2}
                  />
                  {formik.touched.weight2 && formik.errors.weight2 ? (
                    <div className='error'>{formik.errors.weight2}</div>
                  ) : null} */}
     {/* ----------------------------------------------------------------------   */}             
                  {/* <label htmlFor='bodyFat'>Body Fat %</label>
                  <input
                    type='text'
                    id='bodyFat'
                    name='bodyFat'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bodyFat}
                  />
                  {formik.touched.bodyFat && formik.errors.bodyFat ? (
                    <div className='error'>{formik.errors.bodyFat}</div>
                  ) : null}

                  <label htmlFor='handLength'>Hand Length (cm)</label>
                  <input
                    type='text'
                    id='handLength'
                    name='handLength'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.handLength}
                  />
                  {formik.touched.handLength && formik.errors.handLength ? (
                    <div className='error'>{formik.errors.handLength}</div>
                  ) : null}

                  <label htmlFor='handWidth'>Hand Width (cm)</label>
                  <input
                    type='handWidth'
                    id='handWidth'
                    name='handWidth'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.handWidth}
                  />
                  {formik.touched.handWidth && formik.errors.handWidth ? (
                    <div className='error'>{formik.errors.handWidth}</div>
                  ) : null}

                  <label htmlFor='standingVerticalLeap'>Standing Vertical Leap (cm)</label>
                  <input
                    type='text'
                    id='standingVerticalLeap'
                    name='standingVerticalLeap'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.standingVerticalLeap}
                  />
                  {formik.touched.standingVerticalLeap && formik.errors.standingVerticalLeap ? (
                    <div className='error'>{formik.errors.standingVerticalLeap}</div>
                  ) : null}

                  <label htmlFor='maxVerticalLeap'>Max Vertical Leap (cm)</label>
                  <input
                    type='text'
                    id='maxVerticalLeap'
                    name='maxVerticalLeap'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.maxVerticalLeap}
                  />
                  {formik.touched.maxVerticalLeap && formik.errors.maxVerticalLeap ? (
                    <div className='error'>{formik.errors.maxVerticalLeap}</div>
                  ) : null}

                  <label htmlFor='standingReach'>Standing Reach (cm)</label>
                  <input
                    type='text'
                    id='standingReach'
                    name='standingReach'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.standingReach}
                  />
                  {formik.touched.standingReach && formik.errors.standingReach ? (
                    <div className='error'>{formik.errors.standingReach}</div>
                  ) : null}

                  <label htmlFor='wingspan'>Wingspan (cm)</label>
                  <input
                    type='text'
                    id='wingspan'
                    name='wingspan'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.wingspan}
                  />
                  {formik.touched.wingspan && formik.errors.wingspan ? (
                    <div className='error'>{formik.errors.wingspan}</div>
                  ) : null}

                  <label htmlFor='age'>Age</label>
                  <input
                    type='text'
                    id='age'
                    name='age'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.age}
                  />
                  {formik.touched.age && formik.errors.age ? (
                    <div className='error'>{formik.errors.age}</div>
                  ) : null}

                  <button type='submit' className="submit">Submit</button>

                  <br /> 
            </form>

        </div> */}
        
        
      </div>

      <div className='comp-form'>
          <div className="center" id = "bracket">
            {/* <div>
              Survey Result
            </div> */}
            <div id='result'></div>
          </div>
      </div>
    </>
  )
};


export default Comparison;