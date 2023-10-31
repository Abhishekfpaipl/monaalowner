<template>
    <div class="container py-2">
        <div class="input-group">
            <div class="form-outline d-flex w-100" style="border-radius: 0% !important;">
                <input type="search" id="form1" class="form-control" placeholder="Search"
                    style="border-top-right-radius: 0px !important; border-bottom-right-radius: 0px; " />
                <button type="button" class="btn btn-primary"
                    style="border-top-left-radius: 0% !important; border-bottom-left-radius: 0%;">
                    <i class="bi bi-search"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderFilter',
    data() {
        return {
            paragraphs: [
                { text: 'By Latest Date', selected: false },
                { text: 'By Oldest Date', selected: false },
                { text: 'By Lowest Amount', selected: false },
                { text: 'By Highest Amount', selected: false }
            ],
            isScrollingDown: false,
            prevScrollPos: window.pageYOffset,
            colors: ["Red", "Blue", "Green", "Yellow", "Orange", "Black"],
            selectedIndexes: [],
        }
    },
    methods: {
        selectColor(index) {
            if (this.isSelected(index)) {
                const selectedIndex = this.selectedIndexes.indexOf(index);
                this.selectedIndexes.splice(selectedIndex, 1);
            } else {
                this.selectedIndexes.push(index);
            }
        },
        isSelected(index) {
            return this.selectedIndexes.includes(index);
        },

        paragraphColor(paragraph) {
            return paragraph.selected ? 'black' : 'gray';
        },
        changeColorAndCheck(clickedParagraph) {
            for (const paragraph of this.paragraphs) {
                if (paragraph === clickedParagraph) {
                    paragraph.selected = true;
                } else {
                    paragraph.selected = false;
                }
            }
        },
    },
    computed: {
        selectedColorNames() {
            if (this.selectedIndexes.length > 0) {
                return this.selectedIndexes.map(
                    (index) => this.colors[index]
                ).join(", ");
            } else {
                return "No color selected";
            }
        },
    },
}
</script>

<style  scoped>
.selected-color {
    border: 1px solid black;
}

.container {
    transition: transform 0.3s ease-in-out;
}

.hide-on-scroll {
    transform: translateY(-200%);
}
</style>