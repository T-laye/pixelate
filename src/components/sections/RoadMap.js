import React from "react";
import DropBoxes from "../DropBoxes";

export default function RoadMap() {
  return (
    <div className="min-h-[50vh] py-14">
      <DropBoxes />
      <div className="container mx-auto">
        <h2 className="text-xl font-semibold mb-10 lg:mb-20 text-center lg:text-3xl">
          Our Road Map
        </h2>

        <div className="">
          <div className="flex items-center relative mx-auto h-[145px] border-t-[0.7px] border-r-[0.7px]  border-primary w-[230px]">
            <div className="absolute -right-0.5 -top-0.5 w-[5.3px] h-[5.3px] bg-primary rounded-full"></div>
            <div className="absolute -left-0.5 -bottom-1 w-[5.3px] h-[5.3px] bg-primary rounded-full"></div>
            <div className="absolute w-[66px] h-[27px] rounded-md border-[0.7px] border-primary bg-[#150e28] -top-3.5 -left-10 max-[300px]:left-0 text-[8px] flex justify-center items-center">
              PHASE 1
            </div>

            <div className=" w-[169px] h-[94px] rounded-md border-[0.7px] border-primary  text-[8px] flex flex-col justify-evenly p-2 ">
              <div className="flex items-center space-x-1.5">
                <div className=" w-1 h-1 bg-primary rounded-full"></div>
                <div>$PXL8 Launch</div>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className=" w-1 h-1 bg-primary rounded-full"></div>
                <div>Trendings / Listings</div>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className=" w-1 h-1 bg-primary rounded-full"></div>
                <div>$4M+ Daily Volume</div>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className=" w-1 h-1 bg-primary rounded-full"></div>
                <div>2500+ Holders</div>
              </div>
            </div>
          </div>

          <div className="flex items-center relative mx-auto h-[145px] border-t-[0.7px] border-l-[0.7px] border-primary w-[230px]">
            <div className="absolute -right-0.5 -bottom-1 w-[5.3px] h-[5.3px] bg-primary rounded-full"></div>
            <div className="absolute w-[66px] h-[27px] rounded-md border-[0.7px] border-primary bg-[#150e28] -top-3.5 -right-10 max-[300px]:-right-1 text-[8px] flex justify-center items-center">
              PHASE 2
            </div>

            <div className=" w-[169px] h-[94px] rounded-md border-[0.7px] border-primary  text-[8px] flex flex-col justify-evenly p-2 ml-4">
              <div className="flex items-center space-x-1.5">
                <div className=" w-1 h-1 bg-primary rounded-full"></div>
                <div>$PXL8 Launch</div>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className=" w-1 h-1 bg-primary rounded-full"></div>
                <div>Trendings / Listings</div>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className=" w-1 h-1 bg-primary rounded-full"></div>
                <div>$4M+ Daily Volume</div>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className=" w-1 h-1 bg-primary rounded-full"></div>
                <div>2500+ Holders</div>
              </div>
            </div>
          </div>

          <div className="flex items-center relative mx-auto h-[145px] border-t-[0.7px] border-r-[0.7px] border-b-[0.7px] border-primary w-[230px]">
            <div className="absolute left-0 -bottom-1 w-[5.3px] h-[5.3px] bg-primary rounded-full"></div>
            <div className="absolute -right-1 -bottom-1 w-[5.3px] h-[5.3px] bg-primary rounded-full"></div>
            <div className="absolute w-[66px] h-[27px] rounded-md border-[0.7px] border-primary bg-[#150e28] -top-3.5 -left-10 max-[300px]:-left-1 text-[8px] flex justify-center items-center">
              PHASE 3
            </div>

            <div className=" w-[169px] h-[94px] rounded-md border-[0.7px] border-primary  text-[8px] flex flex-col justify-evenly p-2 ">
              <div className="flex items-center space-x-1.5">
                <div className=" w-1 h-1 bg-primary rounded-full"></div>
                <div>$PXL8 Launch</div>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className=" w-1 h-1 bg-primary rounded-full"></div>
                <div>Trendings / Listings</div>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className=" w-1 h-1 bg-primary rounded-full"></div>
                <div>$4M+ Daily Volume</div>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className=" w-1 h-1 bg-primary rounded-full"></div>
                <div>2500+ Holders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
