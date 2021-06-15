<template>
 
   <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col>
            <b-card-text>
             Friend List
            </b-card-text>
  <b-card-text>
              <div>
                  <b-table hover :items="items"></b-table>
                </div>
  </b-card-text>
           </b-col>
            <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          {
            age: 89,
            first_name: 'Geneva',
            last_name: 'Wilson',
            _rowVariant: 'danger'
          },
          {
            age: 40,
            first_name: 'Thor',
            last_name: 'MacDonald',
            _cellVariants: { age: 'info', first_name: 'warning' }
          },
          { age: 29, first_name: 'Dick', last_name: 'Dunlap' }
        ]
      }
    }
  }
</script>