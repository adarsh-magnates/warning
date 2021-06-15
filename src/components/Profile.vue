<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-card
            :title="userProfileDetails.name"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
             
            </b-card-text>

            <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
          </b-card>
        </b-col>
        <b-col>
             <b-card-text>
              desgination:{{userProfileDetails.desgination}}
              <br>
              <br>
             <div> college:{{userProfileDetails.college}}</div>
               <br>
              <div> year:{{userProfileDetails.year}}</div>
               <br>
             <div>  session:{{userProfileDetails.session}}</div>
               <br>
             <div>  rank:{{userProfileDetails.rank}}</div>
            </b-card-text> 

             
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    data () {
      return {
        userProfileDetails: {
          name:"Prakash Suthar",
          desgination: "Software Engg.",
          college:"asdfgh",
          year:"1234",
          session:"2000",
          rank:"1"
        },
        
      }
    }
  }
</script>