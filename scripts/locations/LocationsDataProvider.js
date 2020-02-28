const locationDetails = [
  {
    id: 1,
    name: 'Great Barrier Reef',
    climate: 'Warm',
    location: 'Australia',
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2Fvideos%2Fgreat-barrier-reef-coral-gardener_0.jpg%3Fitok%3DIeWt4-od"
  },
  {
    id: 2,
    name: 'Belize Barrier Reef',
    climate: 'Very Warm',
    location: 'Belize',
    image: "https://www.chaacreek.com/sites/default/files/styles/home_carousel/public/great_belize_barrier_reef_aerial_shot_chaa_creek.jpg"
  },
  {
    id: 3,
    name: 'Apo Reef',
    climate: 'Hot',
    location: 'Phillipines',
    image: "https://4.bp.blogspot.com/-Wz24Z51rD8w/XBhebXHWAFI/AAAAAAAAD6I/RC-qGBcD0eQovG3Ws54TdXJFySssnQuRQCLcBGAs/s1600/Apo%2Breef%2Bheader.png"
  }
]

const useLocationDetails = () => locationDetails.slice()

export default useLocationDetails



