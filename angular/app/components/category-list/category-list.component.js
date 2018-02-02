class CategoryListController{
    constructor(API , $log){
        'ngInject';

        this.API = API;
        this.$log = $log;
        //
    }

    $onInit(){
        this.API.all('/categories').get('').then((response) => {
            this.categories = response.data.data;
        })
    }
}

export const CategoryListComponent = {
    templateUrl: './views/app/components/category-list/category-list.component.html',
    controller: CategoryListController,
    controllerAs: 'vm',
    bindings: {}
};
