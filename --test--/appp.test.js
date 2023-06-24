const { describe, it } = require('test')
const app = require('../index')

const supertast= require('supertest')
const exp = require('../controllers/house_controller')
const about = require('../controllers/about_controller')

describe("testing about get,post,put,delete",()=>{
    let about_id
    //get

    it("get testing/ waa inuu so baxaa 200 statuscode", async() =>{
      const res = await supertast(about).get("/abouts");

      expect(res.statusCode).toBe(200)
    });
    it("post testing route,expectedc 200 statuscode",async()=>{
        const posts = await supertast(about).post('/abouts').send({
            fahfaahin_yar:"minaaa",
            fahfaahin:"abdiii"
        })
        about_id=posts.body.about_id
        expect(posts.statusCode).toBe(200)
    })
    // getbyid
it("get byid services  must be  200 statuscode", async() => {

    const res=await supertast (about).get(`/abouts/${getone}`)
    expect(res.statusCode).toBe(200)
    console.log(getone)
 })
   ///put
   it("updated values  must be 200 statuscode", async() => {
 
    const res= await supertast(about).put(`/abouts/${about_id}`)
    expect(res.statusCode).toBe(200)
 })
//delete
  it("deleted gelerry values  must be  200 statuscode", async() => {
 
     const res=await supertast(about).delete(`/abouts/${about_id}`)
     expect(res.statusCode).toBe(200)
 
})
 
 })
